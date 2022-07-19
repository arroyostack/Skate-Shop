import {
    ref
} from "@vue/reactivity";


const searchArtist = () => {

    const getArtist = async (term) => {
        let artistId = ref(null)
        let artist = ref(null)
        //------------------------------------------------------------------------------
        //ARTIST ID
        const optionsId = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '265ec831efmshe764877c97865f3p1feaddjsn94cb47b5b638',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        try {
            const res = await fetch(
                `https://spotify23.p.rapidapi.com/search/?q=${term}&type=artists&offset=0&limit=10&numberOfTopResults=5`,
                optionsId
            );
            const data = await res.json();

            artistId.value = data.artists.items[0].data.uri.replace(
                "spotify:artist:",
                ""
            );
        } catch (err) {
            console.log(err.message);
        }
        //////////////////////////////////////////
        //FULL ARTIST OVERVIEW
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3d69f098c8msh8ae90e600d35ee6p188756jsn5032d78a96be',
                'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
            }
        };



        try {
            const res = await fetch(
                `https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=${artistId.value}`,
                options
            );
            const data = await res.json();
            artist.value = data
            // console.log(data);
        } catch (err) {
            console.log(err.message);
        }

        return {
            artist
        }
    }
    return getArtist

}

export default searchArtist