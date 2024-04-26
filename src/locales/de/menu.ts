/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu = {
    "cancel": "Zurück",
    "continue": "Weiter",
    "dailyRun": "Tägliche Herausforderung (Beta)",
    "loadGame": "Spiel laden",
    "newGame": "Neues Spiel",
    "selectGameMode": "Wähle Spielmodus",
    "logInOrCreateAccount": "Logge dich ein oder erstelle ein Konto um zu beginnen. Keine E-Mail benötigt!",
    "failedToLoadSaveData": "Fehler beim Laden des Speicherstandes. Lade die Seite neu um es erneut zu versuchen.\nSollte der Fehler bestehen, kontaktiere einen Administrator.",
    "sessionSuccess": "Sitzung erfolgreich geladen.",
    "failedToLoadSession": "Sitzungsdaten konnten nicht geladen werden.\nSie könnten beschädigt sein.",
    "boyOrGirl": "Bist du ein Junge oder ein Mädchen?",
    "boy": "Junge",
    "girl": "Mädchen",
    "bossAppeared": "{{bossName}} erscheint.",
    "trainerAppeared": "Eine Herausforderung von {{trainerName}}\n!",
    "singleWildAppeared": "Ein wildes {{pokemonName}} erscheint!",
    "multiWildAppeared": "Ein wildes {{pokemonName1}}\nund {{pokemonName2}} erscheint!",
    "playerComeBack": "Komm zurück, {{pokemonName}}!",
    "trainerComeBack": "{{trainerName}} zieht {{pokemonName}} zurück!",
    "playerGo": "Los! {{pokemonName}}!",
    "trainerGo": "{{pokemonName}} wird von {{trainerName}} in den Kampf geschickt!",
    "switchQuestion": "Willst du {{pokemonName}}\naustauschen?",
    "pokemon": "Pokémon",
    "sendOutPokemon": "Los! {{pokemonName}}!",
    "levelCapUp": "Die Levelgrenze\nerhöht sich auf {{levelCap}}!",
    "moveNotImplemented": "{{moveName}} ist noch nicht implementiert und kann deshalb nicht ausgewählt werden.",
    "moveDisabled": "{{moveName}} ist blockiert!",
    "noPokeballForce": "Eine mysteriöse Kraft\nverhindert das Fangen",
    "noPokeballTrainer": "Du kannst das Pokémon\neines Trainers nicht fangen!",
    "noPokeballMulti": "Du kannst nur einen Ball werfen\nwenn ein Pokémon übrig ist!",
    "noPokeballStrong": "Du musst das Pokémon schwächen bevor\ndu einen Ball werfen kannst!",
    "noEscapeForce": "Eine mysteriöse Kraft\nverhindert das fliehen.",
    "noEscapeTrainer": "Du kannst aus Trainer-Kämpfen nicht fliehen!",
    "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nverhindert {{escapeVerb}}!",
    // do these escape verbs get used only here? because that will potentially change the spelling
    "escapeVerbSwitch": "wechseln",
    "escapeVerbFlee": "fliehen",
    "notDisabled": "{{moveName}} ist nicht mehr\nblockiert!",
} as const;