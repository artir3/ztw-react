// import React from 'react';
// import '../containers/profile/Profile.css';
//
// // localization={this.state.localization_id}
// // cat={this.state.categories}
// // employ={this.state.employees}
// // tables={this.state.tables}
//
// const profileForm = (props) => {
//     // const {value} = this.state;
//     return (
//         <div className="Reastaurant">
//             {props.id ? <h3>"Restaurant no." {props.id}</h3> : <h3>'Creating new restaurant'</h3>}
//             <hr>
//                 <form onSubmit={props.submit} onReset={props.reset}>
//                     <div>
//                         <label>Restaurant name:</label>
//                         <input type="text" name="name" value={props.name}
//                                onChange={props.fieldChange}/>
//                     </div>
//                     <div>
//                         <label>Description:</label>
//                         <text type="text" name="description" value={props.description}
//                               onChange={props.fieldChange}/>
//                     </div>
//                     <div>
//                         <label>Menu:</label>
//                         <textarea type="textarea" name="menu" value={props.menu}
//                                   onChange={props.fieldChange}/>
//                     </div>
//                     <div>
//                         <label>Select localization:</label>
//                         <Select
//                             closeOnSelect={false}
//                             multi
//                             onChange={this.handleSelectChange}
//                             options={options}
//                             placeholder="Select your localization"
//                             removeSelected={this.state.removeSelected}
//                             simpleValue
//                             value={value}
//                         />
//                     </div>
//                     <div>
//                         <input type="submit" value={props.id == null ? 'Register' : 'Update'}/>
//                         <input type="reset" value="Cancel"/>
//                     </div>
//                 </form>
//         </div>
// )
// };
//
// export default profileForm;