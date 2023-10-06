import { Redirect ,Stack } from "expo-router";



const Layout = ()=> {
   
    return <Stack>
        < Redirect href="/home"/>
    </Stack>;
}


export default Layout;