import axios from "axios";
const instance = axios.create({
   baseURL:'https://connections-api.herokuapp.com/',
})

const setToken = (token) => {
   instance.defaults.headers.common['Authorization'] = token;
}

export const dellToken = () => {
   delete instance.defaults.headers.common['Authorization'] 
}


export const signUp = async (body) => {
   return await instance.post('/users/signup', body)
}

export const logIn = async (body) => {
   const {data} = await instance.post('/users/login', body)
   setToken(`Bearer ${data.access_token}`)
   return data
}

export const logOut = async () => {
    await instance.post('/users/logout')
  
   
}

export const getProfile  = async() => { 
   const {data} = await instance('/users/current') 
return data }




// export const logIn = createAsyncThunk(
//    'auth/login',
//    async (credentials, thunkAPI) => {
//      try {
//        const res = await axios.post('/users/login', credentials);
//        // After successful login, add the token to the HTTP header
//        setAuthHeader(res.data.token);
//        return res.data;
//      } catch (error) {
//        return thunkAPI.rejectWithValue(error.message);
//      }
//    }
//  );



//  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//    try {
//      await axios.post('/users/logout');
//      // After a successful logout, remove the token from the HTTP header
//      clearAuthHeader();
//    } catch (error) {
//      return thunkAPI.rejectWithValue(error.message);
//    }
//  });