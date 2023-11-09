import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    // const[data, setData] = useState("");
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SujanKarki-10Ghz').then(response=> response.json()).then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className=' flex font-medium gap-3 items-center justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <img src={data.avatar_url} alt="github_profile" className='w-14 h-14 rounded-full' />
    <p className='font-medium'>{data.login}</p>
    <h1>Followers: {data.followers}</h1>
    </div>

  )
}

export default Github

export const githubInfoLoader = async ()=>{
   const response = await fetch("https://api.github.com/users/SujanKarki-10Ghz")
   return response.json();
}