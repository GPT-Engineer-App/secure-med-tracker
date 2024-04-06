# secure-med-tracker

I would like you to build an react native web, android and ios application with mongodb/PostgreSQL to create an app that stores all information for the medicines that I have with me. The app needs to be secure and should be compliant with all latest security requirements. The app should not be penetrable by attackers and gain access to data or misuse the app.

On the front-end the app should have pages - Login/Signup/forgot password, dashboard with card view, card detail view, medicine reminders/tracker and ability to store the prescription photo, user profile, FAQ, Terms and conditions, privacy policy. 

A clean, modern design for the app with Nav bar for features like accessing user profile (on right), sub-menu, filters (on left) and search bar in the center.

Each card will contain information about the medicine name, category, quantity left, it's expiry date, manufacturer and buttons on right to track medicine usage and the medications side-effects. When you tap on the Card, it should show all the other relevant information like what is this medicine, warnings, before taking, precautions, dosage, FAQ and any other relevant information that is important in medical. The app should pull information about the medication from open source web datasets or make use of AI platforms to get the information about the medication. 

The dashboard is supposed to have a search bar at the top to search for the medications the user will have.

The medications should be divided into their respective categories and I would like to add filters like category, expiry

The expiry date should be color coded on the cards presented on dashboard like Green means the medication is valid for longer duration, yellow means nearing expiry, orange for last 45 days, and red for expired. 

The medication tracker should be able to store information like what time the medication should be taken as prescribed and the prescription photo.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/secure-med-tracker.git
cd secure-med-tracker
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
