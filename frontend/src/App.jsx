import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import TextSummary from "./pages/TextSummary";
import ParagraphWriting from "./pages/ParagraphWriting";
import AskQuestion from "./pages/AskQuestion";
import GenJScode from "./pages/GenJScode";
import GenImage from "./pages/GenImage";

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="/text-summary" element={<TextSummary />} />
        <Route path="/para-writing" element={<ParagraphWriting />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/gen-jscode" element={<GenJScode />} />
        <Route path="/gen-image" element={<GenImage />} />
      </Routes>
    </>
  );
}

export default App;
