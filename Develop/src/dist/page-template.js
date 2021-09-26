const { generate } = require("rxjs");

const generateTitle = titleText => {
    // if (!titleText) {
    //     return '';
    // }

    return `
    # How do i get this to show ---> ${titleText}
    `;
}

// const generateTableOfContents = tableOfContentsText => {
//     // if (!TableOfContentsText) {
//     //     return '';
//     // }

//     return `
//     ## Table Of Contents ${tableOfContentsText}
//     `
// }

// const generateInstallation = InstallationText => {
//     if (!installationText) {
//         return '';
//     }

//     return `
//     ## Installation
//     `
// }

// const generateDescription = descriptionText => {
//     if (!descriptionText) {
//         return '';
//     }

//     return `
//     ## Description
//     `
// }

// const generateUsage = useageText => {
//     if (!useageText) {
//         return '';
//     }

//     return `
//     ## Useage
//     `
// }

// const generateCredits = creditsText => {
//     if (!creditsText) {
//         return '';
//     }

//     return `
//     ## Credits
//     `
// }

// const generateLicense = LicenseText => {
//     if (!LicenseText) {
//         return '';
//     }

//     return `
//     ## License
//     `
// }

// const generateBadges = BadgesText => {
//     if (!BadgesText) {
//         return '';
//     }

//     return `
//     ## Badges
//     `
// }

// const generateFeatures = featuresText => {
//     if (!featuresText) {
//         return '';
//     }

//     return `
//     ## Features
//     `
// }

// const generateContributing = contributingText => {
//     if (!contributingText) {
//         return '';
//     }

//     return `
//     ## Contributing
//     `
// }

// const generateTests = testsText => {
//     if (!testsText) {
//         return '';
//     }

//     return `
//     ## Tests
//     `
// }

module.exports = templateData => {
    const { titleText } = templateData;

    return `
    ${generateTitle(titleText)}

    `
}