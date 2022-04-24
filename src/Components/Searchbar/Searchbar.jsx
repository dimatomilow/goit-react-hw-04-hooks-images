import {useState} from 'react';
import {  toast } from 'react-toastify'

export default function Searchbar({onSubmit}) {
  const [imageName, setImageName] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (imageName.trim() === '') {
      toast.error(' Введите поисковый запрос!');
      return;
    }
    onSubmit(imageName);
    setImageName('');
  }
  const handleChange = e => {
    setImageName(
e.currentTarget.value.toLowerCase()

    )
  };

  return (
      <header>
  <form  onSubmit={handleSubmit}>

    <input
      type="text"
            placeholder="Search images and photos"
            onChange={handleChange}
            value={imageName}
          />
          <button type="submit" >
      <span >Search</span>
    </button>
  </form>
</header>
    );
}


// class oldSearchbar extends Component {
//   state = {imageName:''}

// handleSubmit = e => {
//   e.preventDefault();
//   if (this.state.imageName.trim() === '') {
//     alert(' Введите поисковый запрос!');

//     return ;
//   }

//   this.props.onSubmit(this.state.imageName);
//   this.setState({ imageName: "" });

//   };

//   handleChange = e => {
//     this.setState({
//       imageName:e.currentTarget.value.toLowerCase()

//     })
//   };

//   render() {
//     return (
//       <header>
//   <form  onSubmit={this.handleSubmit}>

//     <input
//       type="text"
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={this.state.imageName}
//           />
//           <button type="submit" >
//       <span >Search</span>
//     </button>
//   </form>
// </header>
//     );
//   }
// }
