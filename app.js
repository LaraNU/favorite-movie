const addMovie = document.getElementById('add-movie')
const backdrop = document.getElementById('backdrop')
const modal = document.getElementById('modal')
const modalBtnCancel = document.getElementById('modal-btn-cancel')
const modalBtnAdd = document.getElementById('modal-btn-add')
const userInputs = document.querySelectorAll('input')
const movieList = document.getElementById('main__items')
const mainDescription = document.getElementById('main-description')

const movies = []

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const updateUI = () => {
    if (movies.length === 0) {
        mainDescription.style.display = 'block'
    } else {
        mainDescription.style.display = 'none'
    }
}

const toggleModal = () => {
    toggleBackdrop()
    modal.classList.toggle('visible')
}

const clearMovieInputs = () => {
    for (const userInp of userInputs) {
        userInp.value = ''
    }
}

const cancelModalBtn = () => {
    toggleModal()
    clearMovieInputs()
} //close modal window through btn Cancel

const renderMovie = (title, image, rating) => {
    const newMovieElement = document.createElement('div')
    newMovieElement.className = 'main__item'
    newMovieElement.innerHTML = `
                        <img src="${image}" alt="${title}" class="main__item-img">
                        <div class="main__item-description">
                            <h2 class="main__item-title">${title}</h2>
                            <div class="main__item-rating">${rating}/10</div>
                        </div>
    `
    movieList.append(newMovieElement)
}


const addMovieHandler = () => {
    const titleValue = document.getElementById('modal-title')
    const imageValue = document.getElementById('modal-img-url')
    const ratingValue = document.getElementById('modal-rating')

    const newMovie = {
        title: titleValue.value.trim(),
        image: imageValue.value.trim(),
        rating: ratingValue.value.trim()
    }

    const { title, image, rating } = newMovie //destructuring assignment

    if (title === '' || image === '' || rating === '') {
        alert('Please! Fill correct form')
        return
    } //doesn't work

    movies.push(newMovie)

    console.log(movies)

    renderMovie(
        newMovie.title,
        newMovie.image,
        newMovie.rating
    )

    cancelModalBtn()
    clearMovieInputs()
    updateUI()
}

addMovie.addEventListener('click', toggleModal)
modalBtnCancel.addEventListener('click', cancelModalBtn)
modalBtnAdd.addEventListener('click', addMovieHandler)

