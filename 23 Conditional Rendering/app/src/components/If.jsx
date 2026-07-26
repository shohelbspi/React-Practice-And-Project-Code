function If() {
    // const isLogin = false
    // if (isLogin) {
    //     return (
    //         <div>
    //             <h1>Welcome Back !! You Are Loggedin</h1>
    //         </div>
    //     )
    // }
    // return(
    //     <div>
    //         <h1>Please Login</h1>
    //     </div>
    // )

    let option = 'a'

    if (option === 'a') {
        return(
            <div>Welcome to Component A</div>
        )
        
    }
    if (option === 'b') {
        return(
            <div>Welcome to Component B</div>
        )
        
    }
    if (option === 'c') {
        return(
            <div>Welcome to Component C</div>
        )
        
    }

    return (
        <div>Another Component Load</div>
    )

}

export default If
