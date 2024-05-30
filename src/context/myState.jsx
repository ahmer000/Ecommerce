import React, { useEffect, useState } from 'react'
import MyContext from '../context/myContext';
import { QuerySnapshot, getDocs, Timestamp, addDoc,doc, onSnapshot, query, collection, orderBy, setDoc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB} from '../firebase/FirebaseConfig';

function myState(props) {
  const[loading,setLoading]=useState(false)

   const [mode,setMode]=useState('light');
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('Dark');
      document.body.style.backgroundColor ="rgb(17,24,39)";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
   }
   const [products, setProducts]=useState({
    title : null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time : Timestamp.now(),
    date : new Date().toLocaleString(
  "en-US",
  {
    month: "short",
    day: "numeric",
    year:"numeric",
  }    
    )

   });
   const addProduct = async () => {
    if(products.title == null || products.price == null || products.imageUrl == null ||
   products.category == null || products.description == null ){
    return toast.error("all fields are required")
   }
   setLoading(true)
   try {
    const productRef = collection(fireDB, 'products')
    await addDoc(productRef, products)
    toast.success("Add Product Successfully");
   setTimeout(()=>{
    window.location.href = '/dashboard'
   }, 800);
    getProductData();
setLoading(false);
   } 
   catch (error) {
    console.log(error);
    setLoading(false)
   }
   }

  const editHandle = (item)=>{
    setProducts(item);
  }

const updateProduct = async () =>{
  setLoading(true);
  try {
    await setDoc(doc(fireDB, 'products', products.id), products)
 toast.success("Product updated Successfully")
 setTimeout(()=>{
  window.location.href = '/dashboard'
 }, 800);
 getProductData();
 setLoading(false)

  } catch (error) {
    setLoading(flase)
    console.log(error)
  }
}

const deleteProduct = async (item) => {
  setLoading(true);
  try {
    await deleteDoc(doc(fireDB, "products", item.id));
    toast.success('Product Deleted successfully');
    setLoading(false);
    getProductData();
  } catch (error) {
    toast.error('Product Deletion Failed: ' + error.message);
    setLoading(false);
  }
}

   const [product, setProduct] = useState([]);
    const getProductData = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(fireDB, "products"),
          orderBy("time"),
          // limit(5)
        );
        const data = onSnapshot(q, (QuerySnapshot)=>{
          let productArray = [];
          QuerySnapshot.forEach((doc)=>{
            productArray.push({...doc.data(), id : doc.id});
          });
          setProduct(productArray);
          setLoading(false)
        })
          return ()=> data;
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
 useEffect(() =>{
  getProductData();
 },[]);
     
 const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getProductData();
    getOrderData()

  }, []);
  return (
    <MyContext.Provider value={{mode, toggleMode, order , setLoading , products , setProducts ,  addProduct , product, editHandle , updateProduct, deleteProduct}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default myState