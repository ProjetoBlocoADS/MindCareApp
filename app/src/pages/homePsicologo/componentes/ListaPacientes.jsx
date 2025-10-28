import SearchBar from "./SearchBar";

const pacientes = [
  { id: 1, nome: "Ana Souza", patologiaMental: "Ansiedade crônica" },
  { id: 2, nome: "Bruno Lima", patologiaMental: "Depressão maior" },
  { id: 3, nome: "Carla Mendes", patologiaMental: "Transtorno obsessivo-compulsivo (TOC)" },
  { id: 4, nome: "Diego Ferreira", patologiaMental: "Transtorno bipolar" },
  { id: 5, nome: "Eduarda Silva", patologiaMental: "Síndrome do pânico" },
  { id: 6, nome: "Felipe Rocha", patologiaMental: "Transtorno de estresse pós-traumático (TEPT)" },
  { id: 7, nome: "Gabriela Torres", patologiaMental: "Fobia social" },
  { id: 8, nome: "Henrique Alves", patologiaMental: "Transtorno de personalidade borderline" },
  { id: 9, nome: "Isabela Costa", patologiaMental: "Depressão leve" },
  { id: 10, nome: "João Pereira", patologiaMental: "Ansiedade generalizada" }
];


export default function ListaPacientes() {
    return <div className="w-[359px] h-[500px] bg-[#EEEEEE] rounded-[24px] mx-auto">
        <SearchBar />
    </div>
}