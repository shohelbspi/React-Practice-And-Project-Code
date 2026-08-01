import UserCard from "./UserCard";

function NameList() {

    // normal array
    // const name = ['Shohel', 'Sadat', 'Sompa']

    // array of object
    const nameList = [
    { id: 1, name: "Rahim Ahmed", email: "rahim@example.com", age: 15 },
    { id: 2, name: "Karim Hassan", email: "karim@example.com", age: 28 },
    { id: 3, name: "Fatema Tuz Zohra", email: "fatema@example.com", age: 22 },
    { id: 4, name: "Ayesha Siddiqua", email: "ayesha@example.com", age: 24 },
    { id: 5, name: "Tanvir Rahman", email: "tanvir@example.com", age: 27 }
    ];

    // array of array

    // const nameList = [
    //     [1, "Rahim Ahmed", "rahim@example.com", 25],
    //     [2, "Karim Hassan", "karim@example.com", 28],
    //     [3, "Fatema Tuz Zohra", "fatema@example.com", 22],
    //     [4, "Ayesha Siddiqua", "ayesha@example.com", 24],
    //     [5, "Tanvir Rahman", "tanvir@example.com", 27]
    // ];

    return (
        <div>
            {/* {name.map(function (item, index) {

                return (
                    <p key={index}>{item}</p>
                )

            })} */}

            {/* {
                nameList.map(function(user){
                    return(
                        <div className="bg-[lightseagreen] mt-4 text-white">
                            <h3>Name : {user.name}</h3>
                            <p>Email : {user.email}</p>
                            <p>Age : {user.age}</p>
                        </div>

                    )
                })
            } */}

            {/* {nameList.map(function (item, index) {
                return (
                    <div key={index}>
                        {item.map(function (nestedItem, nestedIndex) {
                            return (

                                <div>
                                    <p key={nestedIndex}>{nestedItem}</p>
                                </div>
                            )
                        })}
                    </div>
                )

            })} */}


            {nameList.map(function(user){
                return(

                    user.age > 18 && <UserCard key={user.id} user={user}/>
                )
            })}

        </div>
    )
}

export default NameList
