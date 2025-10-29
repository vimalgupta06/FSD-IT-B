function Book({ img, subject, price }) {
  return (
    <div className="book">
      <img src={img} alt={subject} />
      <h3>{subject}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

function BookStore() {
  const books = [
    {
      img: "physics.jfif",
      subject: "Physics",
      price: 350,
    },
    {
      img: "chemistry.jpg",
      subject: "Chemistry",
      price: 320,
    },
    {
      img: "maths.jfif",
      subject: "Mathematics",
      price: 400,
    },
  ];

  return (
    <div className="store">
      <h1>My Book Store</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookStore />);
