import { setMovie } from "./script.js"

export function reload(arr, place) {
    place.innerHTML = ""

    if(arr.length === 0) {
        setMovie({Poster: ''})
    } else {
        setMovie(arr[0])
    }

    for(let item of arr) {
        let li = document.createElement('li')
        let del = document.createElement('div')

        li.innerHTML = `${arr.indexOf(item) + 1}. ${item.Title}`
        del.classList.add('delete')
        li.classList.add('promo__interactive-item')

        li.append(del)
        place.append(li)

        li.onclick = () => {
            setMovie(item)
        }
    }
}


export function reload_genres(arr, place) {
    place.innerHTML = ""

    for(let item of arr) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        a.classList.add('promo__menu-item')
        a.href = '#'
        a.innerHTML = item

        li.append(a)
        place.append(li)
        let searchInput = document.querySelector('#search')
        let val = searchInput.value.toLowerCase().trim()

        if(arr.indexOf(item) === 0) {
            a.classList.add('promo__menu-item_active')
        }
    }
}