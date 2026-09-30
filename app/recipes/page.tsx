// Page main /recipes, donc liste de toutes les recettes ("/recipes")

import db, { type Recipe } from "@/lib/db";
import Link from "next/link"; // equivalent de la balise <a>

export default function Recipes() {
    const recipes = db.query("SELECT * FROM recipe").all() as Recipe[];

    return (
        <div>
            <h1>Liste des recettes:</h1>
            <ul className="list-disc list-inside">
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link href={`/recipes/${recipe.id}`} className="hover:underline">
                            {recipe.nom}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}