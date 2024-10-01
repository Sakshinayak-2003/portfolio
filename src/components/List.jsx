const List = ({ items }) => {
    return <ul className="list-disc  list-inside ml-5 text-gray-700 ">             
        {items.map(item => <li className="ml-2">{item}</li>)}
    </ul>
}
export default List;