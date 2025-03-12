import { v4 as uuidv4 } from "uuid";
import icons from "../../../../../assets/stacks-icons";
import styles from "./styles.module.scss";

function Carousel() {
  // Criando uma lista de ícones com IDs únicos
  const iconList = [
    //uuid evita duplicação de valor para key devido ao componente
    //precisar de valores duplicados para as imagens
    ...icons.map((icon) => ({ id: uuidv4(), ...icon })),
    ...icons.map((icon) => ({ id: uuidv4(), ...icon })),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.devIcons}>
        <ul>
          {iconList.map((icon) => (
            <li key={icon.id}>
              <img src={icon.src} alt={`Ícone ${icon.name}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;
