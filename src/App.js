import logo from './logo.svg';
import './App.css';


//child element called Books
const Books = ({bookTitle, author, alt, src, width, height}) => {
  return (
  <>
    <h2>{bookTitle}</h2>
    <span className="authorName"><h3>{author}</h3></span>
    <img 
    src= {src}
    alt= {alt}
    width= {width}
    height= {height}
    />
  </>
)
}


const App = () => {
  return (
      <div id="booksContainer">
      <div className="books">  
      <Books
        bookTitle= "Harry Potter and the Sorcerer's Stone"
        src= "https://books.google.com/books/content?id=wrOQLV6xB-wC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0pxFjDUW9HplCcIzSmlQs0B159ow&w=1280"
        width= {200}
        height= {300}
      />
      <Books
        bookTitle= "Harry Potter and the Chamber of Secrets"
        src= "https://books.google.com/books/content?id=5iTebBW-w7QC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U23kQWHmyYKWnZZ2kLaka0zvjyjGg&w=1280"
        width= {200}
        height= {300}
      />
      <Books
        bookTitle= "Harry Potter and the Prisoner of Azkaban"
        src= "https://books.google.com/books/content?id=Sm5AKLXKxHgC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3tmtZXHnvR_e5jlMSAFaXT9WIuuA&w=1280"
        width= {200}
        height= {300}
        author="Written By: J.K. Rowling"
      />
      </div>
      </div>
  );
}

export default App;
