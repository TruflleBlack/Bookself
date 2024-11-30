document.addEventListener("DOMContentLoaded", function () {
  const STORAGE_KEY = "BOOKSHELF_APP";
  let books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Elemen DOM
  const bookForm = document.getElementById("bookForm");
  const searchForm = document.getElementById("searchBook");
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");
  const modal = document.getElementById("editBookModal");
  const closeModalButton = modal.querySelector(".close");
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");
  document.body.appendChild(overlay);

  // Tombol Dark Mode
  const toggleDarkMode = document.createElement("button");
  toggleDarkMode.id = "toggleDarkMode";
  toggleDarkMode.textContent = "Toggle Dark Mode";
  document.body.appendChild(toggleDarkMode);

  // Fungsi untuk menyimpan ke localStorage
  const saveToStorage = () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  };

  // Fungsi untuk merender buku
  const renderBooks = () => {
      incompleteBookList.innerHTML = "";
      completeBookList.innerHTML = "";

      books.forEach((book) => {
          const bookElement = createBookElement(book);

          if (book.isComplete) {
              completeBookList.appendChild(bookElement);
          } else {
              incompleteBookList.appendChild(bookElement);
          }
      });
  };

  // Fungsi untuk membuat elemen buku
  const createBookElement = (book) => {
      const bookElement = document.createElement("div");
      bookElement.setAttribute("data-bookid", book.id);
      bookElement.setAttribute("data-testid", "bookItem");

      bookElement.innerHTML = `
          <h3 data-testid="bookItemTitle">${book.title}</h3>
          <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
          <p data-testid="bookItemYear">Tahun: ${book.year}</p>
          <div>
              <button data-testid="bookItemIsCompleteButton">
                  ${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
              </button>
              <button data-testid="bookItemDeleteButton">Hapus</button>
              <button data-testid="bookItemEditButton">Edit</button>
          </div>
      `;

      const toggleButton = bookElement.querySelector("[data-testid='bookItemIsCompleteButton']");
      toggleButton.addEventListener("click", () => {
          book.isComplete = !book.isComplete;
          saveToStorage();
          renderBooks();
      });

      const deleteButton = bookElement.querySelector("[data-testid='bookItemDeleteButton']");
      deleteButton.addEventListener("click", () => {
          if (confirm(`Apakah Anda yakin ingin menghapus buku "${book.title}"?`)) {
              books = books.filter((b) => b.id !== book.id);
              saveToStorage();
              renderBooks();
              showToast(`Buku "${book.title}" telah dihapus.`);
          }
      });

      const editButton = bookElement.querySelector("[data-testid='bookItemEditButton']");
      editButton.addEventListener("click", () => {
          openEditModal(book);
      });

      return bookElement;
  };

  // Fungsi untuk membuka modal edit
  const openEditModal = (book) => {
      modal.querySelector("#editBookTitle").value = book.title;
      modal.querySelector("#editBookAuthor").value = book.author;
      modal.querySelector("#editBookYear").value = book.year;
      modal.style.display = "block";
      overlay.style.display = "block";

      document.getElementById("editBookForm").onsubmit = (e) => {
          e.preventDefault();
          book.title = document.getElementById("editBookTitle").value;
          book.author = document.getElementById("editBookAuthor").value;
          book.year = parseInt(document.getElementById("editBookYear").value, 10);

          saveToStorage();
          renderBooks();
          closeModal();
          showToast(`Buku "${book.title}" telah diperbarui.`);
      };
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
      modal.style.display = "none";
      overlay.style.display = "none";
  };

  closeModalButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  // Form tambah buku
  bookForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("bookFormTitle").value;
      const author = document.getElementById("bookFormAuthor").value;
      const year = document.getElementById("bookFormYear").value;
      const isComplete = document.getElementById("bookFormIsComplete").checked;

      const newBook = {
          id: +new Date(),
          title,
          author,
          year: parseInt(year, 10),
          isComplete,
      };

      books.push(newBook);
      saveToStorage();
      renderBooks();
      bookForm.reset();
      showToast(`Buku "${title}" telah ditambahkan.`);
  });

  // Form pencarian buku
  searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = document.getElementById("searchBookTitle").value.toLowerCase();

      const filteredBooks = books.filter((book) =>
          book.title.toLowerCase().includes(query)
      );

      if (filteredBooks.length > 0) {
          incompleteBookList.innerHTML = "";
          completeBookList.innerHTML = "";
          filteredBooks.forEach((book) => {
              const bookElement = createBookElement(book);
              if (book.isComplete) {
                  completeBookList.appendChild(bookElement);
              } else {
                  incompleteBookList.appendChild(bookElement);
              }
          });
      } else {
          alert("Buku tidak ditemukan.");
      }
  });

  // Tombol dark mode
  toggleDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  });

  // Fungsi untuk menampilkan toast
  const showToast = (message) => {
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => {
          toast.classList.add("show");
      }, 100);
      setTimeout(() => {
          toast.classList.remove("show");
          document.body.removeChild(toast);
      }, 3000);
  };

  // Render awal
  renderBooks();
});