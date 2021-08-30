import { v4 } from 'uuid';

function MemoryCard(props) {
    let insects = ['Assassin Bug', 'Bed Bug', 'Madagascar Hissing Cockroach', 'Forest Caterpillar Hunter',
        'Ground Beetle', 'Flat Bark Beetle', 'Scarab Beetle', 'Ladybird Beetle', 'Seed Beetle',
        'Harnessed Moth', 'Monarch Butterfly', 'Io Moth', 'Horse Fly', 'Syrphid Fly', 'Long Horn Beetle',
        'Atlas Moth', 'Velvet Ant', 'Rainbow Scarab', 'New Guinea Walking Stick', 'Eastern Cicada Killer',
        'Elm Sawfly', 'Giant Swallowtail', 'Cynthia Moth', 'Question Mark', 'Dead Leaf Mantis',
        'Sunset Moth', 'Brush Footed Butterfly', 'Atlas Beetle', 'Treehopper', 'Oblong Winged Katydid',
        'Seed Bug', 'Frog Legged Leaf Beetle', 'Owl Butterfly', 'Halloween Pennant', 'Potter Wasp',
        'King Swallowtail', 'Metallic Green Bee', 'Weevil', 'Jewel Scarab', 'Giant Grasshopper']


    const card = insects.map((item, index) => {
        let randomNum = Math.floor(Math.random() * 40)
        var url = "img/" + insects[randomNum] + ".jpg";
        return (
            <div key={v4()}>
                {index < 12 ?
                    <div className="card"
                        id={insects[randomNum]} onClick={props.handleClick}>
                        <img
                            src={url}
                            alt={insects[randomNum]}

                            id={insects[randomNum]}
                            onClick={props.handleClick} />
                        <p
                            className="img-text"
                            id={insects[randomNum]}
                            onClick={props.handleClick}>
                            {insects[randomNum]}
                        </p>
                    </div>
                    : null
                }
            </div>
        )
    })

    return (
        <div className="card-container">
            {card}
        </div>
    );
}

export default MemoryCard;