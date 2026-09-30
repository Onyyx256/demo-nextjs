// Page pour une recette, slug = id ("/recipes/{id})
import db, { type Recipe } from "@/lib/db";
import assert from "assert";
import { notFound } from "next/navigation";

type RecipeId = "1" | "2" | "3";
type RecipeName = "Poulet" | "Boeuf" | "Riz" | undefined;

// function assertValidId(slug: string): asserts slug is RecipeId { // validation de l'ID de la page
//     if(!(slug === "1" || slug === "2" || slug === "3")) {
//         notFound();
//     }
// }

// function assertValidName(name: string | string[] | undefined): asserts name is RecipeName { // validation des searchParams
//     if (typeof name === "string") {
//         if(!(name === "Poulet" || name === "Boeuf" || name === "Riz")) {
//             notFound();
//         }
//     } else if (Array.isArray(name)) {
//         notFound();
//     }
// }

export default async function Recipe({ params }: PageProps<"/recipes/[slug]">) { // params pour slug, searchParams paramètre de recherche dans URL
    const { slug } = await params;
    // assertValidId(slug);

    // const { name } = await searchParams;
    // assertValidName(name)

    const recipe = db.query("SELECT * FROM recipe WHERE id = ?").get(slug) as Recipe | undefined
    if (!recipe) {
        notFound();
    }

    return (
        <div>
            <h1>Détails de la recette {recipe.nom}</h1>
        </div>
    )
}