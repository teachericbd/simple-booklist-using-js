//select UI
let frm = document.querySelector('#book_frm');
let booklist = document.querySelector('.show-book-list');
//book class
class Book{
    constructor(name,writer,code){
        this.title = name;
        this.author = writer;
        this.isbn = code;
    }
}
//UI Class
class UI{
    static setBooks(book){
        let tbody = document.querySelector('.show-book-list');
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='remove'>x</a></td>
        `;
        tbody.appendChild(tr);
    }
    static clearFrm(){
        let title = document.querySelector('#title').value = '';
        let author = document.querySelector('#author').value = '';
        let isbn = document.querySelector('#isbn').value = '';
    }
    static showAlert(msg,cls){
        let flashMsg = document.querySelector('#flas-msg');
        let div = document.createElement('div');
        div.className = `alert ${cls}`;
        div.innerHTML = msg;
        flashMsg.appendChild(div);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        }, 2000)
    }
    static BooksRemove(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            UI.showAlert('Book Remove Successfully', 'success');
        }
    }
}

//add event Listiner
frm.addEventListener('submit', addBook);
booklist.addEventListener('click', removeBook);
//
function addBook(e) {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    //form validation
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Please Fill all field!','error');
    }
    else{
        // Create Book Objects
        let books = new Book(title,author,isbn);
        // console.log(books);
        UI.setBooks(books);
        UI.showAlert('Book Added Successfully', 'success');
        UI.clearFrm();
    }
    e.preventDefault();
}
function removeBook(e){
    UI.BooksRemove(e.target);
    e.preventDefault();
}