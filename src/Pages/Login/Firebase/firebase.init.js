import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebas.config";

const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;