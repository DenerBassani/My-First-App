interface PokemonCardProps {
    name: string;
    id: number;
  }
  
  const PokemonCard: React.FC<PokemonCardProps> = ({ name, id }) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
    return (
      <div className="bg-white p-4 rounded-xl shadow-lg text-center flex flex-col items-center">
        <img src={imageUrl} alt={name} className="w-24 h-24 mb-2" />
        <p className="text-lg font-semibold capitalize">{name}</p>
      </div>
    );
  };
  
  export default PokemonCard;
  