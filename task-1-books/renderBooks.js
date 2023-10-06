

//------------------------------------------------------------TASK-1------------------------------------------------------------------//

// Array containing the entire collection of books
const books = [
  {
    image: "/img/book1.png",
    title: "Un papá para Emma",
    description:
      "Lara Hernández, perdió la virginidad en su fiesta de cumpleaños. Su novio la chantajeó y la vendió a un poderoso cliente. De aquella noche nació su pequeña hija, Emma. La joven madre sin recursos, se esforzaba cada día , por darle todo a su bebé.",
  },
  {
    image: "img/book2.jpg",
    title: "Oficial de policía (La gente que conozco)",
    description:
      "¡Explora el mundo de los policías serviciales! Imágenes coloridas y palabras simples revelan sus aventuras diarias, ¡mejorando tus habilidades de lectura! Incluye preguntas para cuidadores y maestros.",
  },
  {
    image: "img/book3.jpg",
    title: "Jamal, el valiente (Voices Leveled Library)",
    description:
      "Los miembros de una familia se ayudan unos a otros cuando uno de ellos tiene miedo.",
  },
  {
    image: "img/book_4.png",
    title: "Nikita Petrova (reina sin corona)",
    description:
      "Toda su vida soñó con ser la mejor bailarina y portar una corona. Pero a veces la vida se empeña en cambiar el futuro y las ilusiones. Nikita Petrova una jovencita de apenas 17 años, ve sus sueños rotos y destruidos refugiándose en la oscuridad y la soledad, con ese terrible dolor de haberlo perdido todo..      ",
  },
  {
    image: "img/book5.jpg",
    title: "Catalina y Sofía en el mundo subterráneo del Cusco (Libro 1)",
    description:
      "En este primer libro, Catalina y Sofía van camino al colegio y el auto donde las lleva su papá tiene que hacer un brusco movimiento para evitar atropellar a un perrito peruano. Es tan carismático, que las niñas ruegan a sus padres por adoptarlo. Es con este cachorro que dan inicio a uno de sus muchos viajes. Te invitamos a descubrir sus aventuras.",
  },
];


// Functionality that executes the implementation once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // Get dom element with this id to inject the htm content or the info of obtained books
  const bookList = document.getElementById("all-books");

  // C ode that has all the books in the collection and shows them on our html page or view
  books?.forEach((book, index) => {
    bookList.innerHTML += `
    <div class='card'>
    <div class='content-cards'>
    <img src="${book.image}" alt="Cover of ${book.title}" class='image-book'>
        <h3 class='title-book'>${book.title}</h3>
        <span>Descripción: </span>
        <p class='description'>${book.description}</p>
      </div>
    </div>
    `;
  });
});




