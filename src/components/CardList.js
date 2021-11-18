import React from "react";
import Card from "./Card";

function CardList({ data }) {
    return (
        <div className="flex overflow-x-scroll gap-20 flex-nowrap pl-10 max-w-7xl sm:max-w-full sm:justify-center">
            {data.map((experience, id) => (
                <Card experience={experience} key={id} />
            ))}
        </div>
    );
}

export default CardList;
