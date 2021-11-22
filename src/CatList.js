// write your CatList component here
import React from 'react';

class CatList extends React.Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

export default CatList;

// Using Hooks (function):

// export function CatList(props) {
//     console.log(props)
//     const renderCats = props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
//     return (
//         <div>
//             {renderCats}
//         </div>
//     )
// }