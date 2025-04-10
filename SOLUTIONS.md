## TODO 1 & 3: Navigation incorrecte
**Problème**: Utilisation de balises `<a href="">` provoquant un rechargement complet de la page.  
**Solution**: Remplacé par la directive Angular `routerLink`.  
**Angular utilisé**: RouterLink (Routing).

## TODO 2: Formatage du titre
**Problème**: Le titre contient des underscores et une mauvaise casse.  
**Solution**: Création d'un pipe personnalisé (`format.pipe.ts`) pour reformater le texte.  
**Angular utilisé**: Pipe personnalisé.

## TODO 4: Les pages ne s'affichent pas
**Problème**: Aucune page ne s'affichait dans le `<router-outlet>`.  
**Solution**: Vérification et correction des routes dans `app.routes.ts`.  
**Angular utilisé**: Routing, RouterModule, RouterOutlet.

## TODO 5 : Route manquante pour la page de détail
**Problème** : La page de détail d’un livre n'était pas accessible.  
**Solution** : Ajout d’une route dynamique avec le paramètre `:id` dans le fichier `app.routes.ts`.  
**Angular utilisé** : Routing avec paramètres (`books/:id`), `ActivatedRoute`.

## TODO 6 : Formulaire d'ajout de livre
**Problème** : Aucun formulaire présent pour créer un nouveau livre.  
**Solution** : Création d’un `FormGroup` avec les champs `title`, `author`, `description` et `category`.  
**Angular utilisé** : `ReactiveFormsModule`, `FormBuilder`.

## TODO 7 : Validations manquantes
**Problème** : Les champs acceptaient des données invalides ou vides.  
**Solution** : Ajout de validateurs `required`, `minLength` pour contrôler les données saisies.  
**Angular utilisé** : `Validators`, contrôle d’erreur dans le template.

## TODO 8 : Navigation manquante
**Problème** : L'utilisateur ne peut pas revenir à la page précédente depuis la vue de détail.  
**Solution** : Utilisation du service `Location` d’Angular pour revenir en arrière via `this.location.back()`.  
**Angular utilisé** : Service `Location`, gestion d’historique navigateur.

## TODO 9 : Erreur dans la console "Cannot read properties of undefined"
**Problème** : Le composant tente d'afficher les propriétés du livre avant son chargement.  
**Solution** : Utilisation de `*ngIf="book"` pour n’afficher le contenu que lorsque le livre est disponible.  
**Angular utilisé** : Structural directive `*ngIf`.

## TODO 10 : Directive highlight non appliquée
**Problème** : Le titre n’est pas mis en évidence.  
**Solution** : Ajout de la directive `appHighlight` sur le `<h1>`.  
**Angular utilisé** : Custom directive.

## TODO 12 : Bouton de retour non fonctionnel
**Problème** : Le bouton ne faisait rien.  
**Solution** : Ajout de `(click)="goBack()"` et vérification que la méthode utilise `this.location.back()`.  
**Angular utilisé** : Event binding `(click)`, navigation avec `Location`.

## TODO 13 : Les données sont passées à la liste mais pas affichées. Affiche les données
**Problème** : Les livres ne sont pas affichés car la variable `books` utilisée dans `*ngFor` n'était pas correctement définie ou mise à jour.  
**Solution** : Remplacé `*ngFor="let book of books"` par `*ngFor="let book of data"`, car `data` contient probablement la liste des livres dans ton composant.

## TODO 14 : Appliquer la directive highlight à ce champ
**Problème** : La directive `highlight` n'était pas appliquée sur le titre du livre.  
**Solution** : Ajouté `[highlight]` à l'élément `<h2>` pour appliquer la directive personnalisée qui pourrait styliser le titre du livre (par exemple, changer sa couleur ou son style).

## TODO 15 : Afficher la description du livre en utilisant un pour limiter à 20 caractères et ajouter des points de suspension si la description est plus longue
**Problème** : La description était affichée en entier, ce qui peut rendre l'interface trop longue si la description est trop longue.  
**Solution** : Créé un pipe `truncate` pour limiter la description à 20 caractères, et ajouter des points de suspension (`...`) si elle est plus longue.

## TODO 16 : Affiche une alerte qui indique que le favori a été modifié
**Problème** : Il manque une alerte pour informer l'utilisateur lorsque l'état de favori du livre a été modifié.  
**Solution** : Ajouté un `alert` dans la méthode `toggleFavorite`, qui informe l'utilisateur que le livre a été ajouté ou retiré des favoris, selon son état actuel (`updatedBook.isFavorite`).

## TODO 17 : Affiche une alerte qui indique que la modification du favori a échoué
**Problème** : Aucune alerte n'est affichée en cas d'échec de la modification du favori.  
**Solution** : Ajouté un `alert` dans la gestion des erreurs de `toggleFavorite` pour notifier l'utilisateur qu'une erreur est survenue lors de la modification du favori.

## TODO 18 : Affiche une alerte qui indique que le livre a été supprimé
**Problème** : Aucune alerte n'est affichée lorsque le livre est supprimé avec succès.  
**Solution** : Ajouté un `alert` dans la méthode `deleteBook`, qui informe l'utilisateur que le livre a été supprimé avec succès.

## TODO 19 : Affiche une alerte qui indique que la suppression du livre a échoué
**Problème** : Aucune alerte n'est affichée en cas d'échec de la suppression du livre.  
**Solution** : Ajouté un `alert` dans la gestion des erreurs de `deleteBook` pour notifier l'utilisateur qu'une erreur est survenue lors de la suppression du livre.

## TODO 20 : Identifie et corrige l'erreur & affiche le titre en uppercase
**Problème** : Le titre est affiché en minuscules, ce qui ne correspond pas à l'exigence de l'afficher en majuscules.  
**Solution** : Modifié le code pour afficher le titre en majuscules en utilisant un pipe Angular intégré. Le pipe `uppercase` permet de transformer le texte en majuscules directement dans le template.

## TODO 22 (Bonus point, optionnel) : Créer un component pour afficher le header et l'utiliser ici
**Problème** : Le header est actuellement directement inclus dans le template principal. Il pourrait être plus modulaire et réutilisable sous forme de component.  
**Solution** : Créé un nouveau component `HeaderComponent` qui gère l'affichage du header. Ensuite, utilisé ce component dans le template principal (`AppComponent` ou le composant parent).

## TODO 23 (Bonus point) : Créer un component pour afficher le footer et l'utiliser ici
**Problème** : Comme pour le header, le footer est directement inclus dans le template principal, ce qui empêche de le réutiliser facilement et encombre le template.  
**Solution** : Créé un component `FooterComponent` pour gérer l'affichage du footer. Cela permettra de séparer la logique et de rendre le footer réutilisable dans d'autres parties de l'application.

## TODO 24 : Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
**Problème** : La directive `HighlightDirective` doit être modifiée pour appliquer un style spécifique (texte en gras) si l'input est `true`. Actuellement, la directive ne fait rien d'autre que de recevoir une valeur.  
**Solution** : Modifié la directive pour qu'elle applique un style CSS en fonction de la valeur de l'input `appHighlight`. Si l'input est `true`, le texte du champ sera mis en gras. Ensuite, appliqué cette directive au champ `title` sur les pages `book-detail` et `book-list`.
