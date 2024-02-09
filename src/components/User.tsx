type Props = {
    firstName: string,
    lastName: string,
    age: number,
    showAge: boolean
}

function User({firstName, lastName, age, showAge}: Props){
    return(
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            {
                showAge //props.showAge===true необязательно, т.к. showAge истина по умолчанию
                ? <p>Age: {age}</p>
                : ""
            }    
        </div>
    );
}
export default User;