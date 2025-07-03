function Dropdown(props){
    const options = props.option;
    return(
        <div>
  <div className="dropdown-container flex items-center gap-3 mb-4">
    <div className="text-lg font-semibold"> {props.title} </div>
    <div>
      <select
        value={props.selected}
        onChange={(e) => props.setValue(e.target.value)}
        className="bg-white/55 backdrop-blur-lg text-black font-medium px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition ease-in-out duration-200 cursor-pointer "
      >
        {options.map((opt, index) => (
          <option key={index} className="bg-[#FFFAE9]">{opt}</option>
        ))}
      </select>
    </div>
  </div>
</div>
    )
}

export default Dropdown;