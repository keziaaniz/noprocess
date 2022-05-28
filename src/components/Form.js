import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    axios
      .post("https://sp-labs.vercel.app/api/contact", data)
      .then((response) => {})
      .catch((error) => {
        alert("Seu cadastro contém algum erro");
      });
  }
  return (
    <div className="Form">
      <h2>Não fique parado, fale conosco</h2>
      <form className="Form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          className="Form-input"
          valeu={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Seu email"
          className="Form-input"
          required
        />
        <select value={"Seu segmento"} className="Form-input">
          <option value="Seu segmento" className="Form-input">
            Seu segmento
          </option>
          <option value="cível" className="Form-input">
            Cível
          </option>
          <option value="empresarial" className="Form-input">
            Empresarial
          </option>
          <option value="trabalhista" className="Form-input">
            Trabalhista
          </option>
        </select>
        <textarea
          type="text"
          placeholder={"fale um pouco sobre seu negócio"}
          className="Form-textarea"
          cols="29"
          rows="8"
          required
        ></textarea>
        <div className="checkmark-container">
          <input type="checkbox" id="textbox" className="checkmark" />
          <label for="textbox" className="checkmark-text">
            {" "}
            Declaro que conheço a Política de Privacidade e autorizo a
            utilização das minhas informações pelo SP Labs
          </label>
        </div>
        <button
          type="submit"
          id="Form-button"
          className="Form-button"
          onClick={() => setModalVisible(true)}
        >
          {" "}
          Enviar{" "}
        </button>
      </form>

      {modalVisible && (
          <div className="Modal-container">
          <div id="Form-button" className="Modal">
          <div className="Modal-feedback">
          <button
          className="close"
          type="button"
          onClick={() => setModalVisible(false)}
          >
          X
          </button>
          <p>Obrigado pelo contato {name}</p>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
