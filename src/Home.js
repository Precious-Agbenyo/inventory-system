import ItemList from "./ItemList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: items,
    isPending,
    error,
    handleDelete,
    handleEdit,
  } = useFetch("http://localhost:5000/inventories");
  console.log(items);

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {items && (
        <ItemList itemList={items} title="All Items" handleEdit={handleEdit} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
