import "./Boton.css";

const Boton = (props) => {
   const nombre = props.name;
   return (
      <>
         <button class="btn primary slide_down">{nombre}</button>
      </>
   )
}

export default Boton;