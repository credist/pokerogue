import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
    "yes": "Yes",
    "no": "No",
    "cancel": "Abbrechen",
    "continue": "Fortfahren",
    "dailyRun": "Täglicher Run (Beta)",
    "loadGame": "Spiel laden",
    "newGame": "Neues Spiel",
    "selectGameMode": "Wähle einen Spielmodus",
    "logInOrCreateAccount": "Logge dich ein oder erstelle einen Account zum starten. Keine Email nötig!",
    "username": "Benutzername",
    "password": "Passwort",
    "login": "Einloggen",
    "register": "Registrieren",
    "emptyUsername": "Benutzername darf nicht leer sein",
    "invalidLoginUsername": "Der eingegebene Benutzername ist ungültig",
    "invalidRegisterUsername": "Benutzername darf nur Buchstaben, Zahlen oder Unterstriche enthalten",
    "invalidLoginPassword": "Das eingegebene Passwort ist ungültig",
    "invalidRegisterPassword": "Passwort muss 6 Zeichen oder länger sein",
    "usernameAlreadyUsed": "Der eingegebene Benutzername wird bereits verwendet",
    "accountNonExistent": "Der eingegebene Benutzer existiert nicht",
    "unmatchingPassword": "Das eingegebene Passwort stimmt nicht überein",
    "passwordNotMatchingConfirmPassword": "Passwort muss mit Bestätigungspasswort übereinstimmen",
    "confirmPassword": "Besätige Passwort",
    "registrationAgeWarning": "Mit der Registrierung bestätigen Sie, dass Sie 13 Jahre oder älter sind.",
    "backToLogin": "Zurück zum Einloggen",
    "failedToLoadSaveData": "Speicherdaten konnten nicht geladen werden. Bitte laden Sie die Seite neu.\nWenn dies weiterhin der Fall ist, wenden Sie sich bitte an den Administrator.",
    "sessionSuccess": "Sitzung erfolgreich geladen.",
    "failedToLoadSession": "Ihre Sitzungsdaten konnten nicht geladen werden.\nSie könnten beschädigt sein.",
    "boyOrGirl": "Bist du ein Junge oder ein Mädchen?",
    "boy": "Junge",
    "girl": "Mädchen",
    "confirmStarterSelection": "Begin with these Pokémon?",
    "bossAppeared": "{{bossName}} erscheint.",
    "trainerAppeared": "{{trainerName}}\nmöchte kämpfen!",
    "singleWildAppeared": "Ein wildes {{pokemonName}} erscheint!",
    "multiWildAppeared": "Ein wildes {{pokemonName1}}\nund {{pokemonName2}} erscheinen!",
    "playerComeBack": "Komm zurück, {{pokemonName}}!",
    "trainerComeBack": "{{trainerName}} ruft {{pokemonName}} zurück!",
    "playerGo": "Los! {{pokemonName}}!",
    "trainerGo": "{{trainerName}} sendet {{pokemonName}} raus!",
    "switchQuestion": "Willst du\n{{pokemonName}} auswechseln?",
    "pokemon": "Pokémon",
    "sendOutPokemon": "Los! {{pokemonName}}!",
    "evolving": "What?\n{{pokemonName}} is evolving!",
    "stoppedEvolving": "{{pokemonName}} stopped evolving.",
    "pauseEvolutionsQuestion": "Would you like to pause evolutions for {{pokemonName}}?\nEvolutions can be re-enabled from the party screen.",
    "evolutionsPaused": "Evolutions have been paused for {{pokemonName}}.",
    "evolutionDone": "Congratulations!\nYour {{pokemonName}} evolved into {{evolvedPokemonName}}!",
    "dailyRankings": "Daily Rankings",
    "weeklyRankings": "Weekly Rankings",
    "noRankings": "No Rankings",
    "loading": "Loading…",
    "playersOnline": "Players Online"
} as const;