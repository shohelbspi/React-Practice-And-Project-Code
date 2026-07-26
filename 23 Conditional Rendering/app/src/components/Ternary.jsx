import React from 'react'

function Ternary() {
    //   let isLogin = true
    //   return (
    //     <div>
    //       {isLogin ? <h1>Welcome Back !! You Are Loggedin</h1>  : <h1>Please Login Frist</h1>}
    //     </div>
    //   )

    let option = 'd'

    return (
        <div>
            {
                option === 'a'
                    ? <div>Component A Is Loading</div>
                    :
                    option === 'b'
                        ? <div>Component  B Is Loading</div>
                        :
                        option === 'c'
                            ? <div>Component  C Is Loading</div>
                            : <div>Another Component are loading</div>
            }
        </div>
    )
}

export default Ternary
