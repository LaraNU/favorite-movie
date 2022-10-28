const addMovie = document.getElementById('add-movie')
const backdrop = document.getElementById('backdrop')
const modal = document.getElementById('modal')
const modalBtnCancel = document.getElementById('modal-btn-cancel')
const modalBtnAdd = document.getElementById('modal-btn-add')
const userInputs = document.querySelectorAll('input')
const movieList = document.getElementById('main__items')

const movies = []

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
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

    movies.push(newMovie)

    console.log(movies)

    renderMovie(
        newMovie.title,
        newMovie.image,
        newMovie.rating
    )

    clearMovieInputs()
}

addMovie.addEventListener('click', toggleModal)
modalBtnCancel.addEventListener('click', cancelModalBtn)
modalBtnAdd.addEventListener('click', addMovieHandler)

