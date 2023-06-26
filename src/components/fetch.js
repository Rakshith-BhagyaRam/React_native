import {useState} from 'react';
import {View} from 'react-native';



const fetch = () => {
 
  const [data, setData] = useState([]);
   let token;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://203.129.243.94:8086/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            op: 'login',
            emp_id: 'emp222',
            password: 'password',
          }),
        });

        const result = await response.json();
        setData(result.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  token = data.accessToken;
  
  console.log(token);

  return <View></View>;
};

