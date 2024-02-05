function Main({props, passed}) {
    const {name} = props
    console.log(name);
  return (
    <div className="Main">
      <div className={ name==='astik' ? "text-success" : ""} onClick={()=>{passed("changing..")}}>{name}</div>
    </div>
  );
}

export default Main;
