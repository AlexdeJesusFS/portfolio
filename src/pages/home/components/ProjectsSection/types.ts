interface Tag {
  text: string;
  icon: string; // valores devem ser iguais às chaves do iconMap
}

interface Project {
  title: string;
  text: string;
  tags: Tag[];
}

export interface BusinessProjects {
  projectsColumnLeft: Project[];
  projectsColumnRight: Project[];
}
