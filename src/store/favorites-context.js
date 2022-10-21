import { createContext, useState } from "react"

// the const created can be used as react component, thus should start with capital letter.
// this can be anything, here we create an object with empty values
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
})
// note: not necessary to add those empty functions above, just helps with VSCode autocompletion

// we create a regular react component that can provide context to any component that needs the values by wrapping around them (see index.js),
// also responsible for updating the context values.
export function FavoritesContextProvider(props) {
    // here we can manage state as in any normal component, update content object and pass it along
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        // could use userFavorites.concat(favoriteMeetup), but not good practice.
        // concat is like push but returns new array rather than updating current one.
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function removeFavoriteHandler(meetupId) {
        // filter is built in function that returns new array and takes in function as argument:
        // go through each item (meetup), if function returns true, keep it in ouput array, if false remove it.
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id != meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        // some() also needs function as argument that is executed for every item in array.
        // if at least one item in array returns true with that function, some() overall returns true.
        return userFavorites.some((meetup) => meetup.id == meetupId)
    }

    // we can also add pointers to our functions to the context, so they are available in other components.
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    }
    return (
        // .Provider is given by createContext object to use as component.
        <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>
    )
}

export default FavoritesContext
