import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { deleteTodo, toggleStatus } from "../redux/actions";
import api from "../api";
import { toast } from "react-toastify";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  // dispatch kurulumu
  const dispatch = useDispatch();

  // delete
  const handleDelete = () => {
    // reducer'a haber gönder
    // dispatch({
    //   type: ActionTypes.DELETE,
    //   payload: todo.id,
    // });

    // *! api ile db.json dosyasına bağlantı sağladık >>> db.json dosyasından da kaldırıyoruz.
    api
      .delete(`/todos/${todo.id}`)
      .then(() => {
        dispatch(deleteTodo(todo.id));
        toast.info("todo listeden kaldırıldı");
      })
      .catch(() => {
        toast.error("Silme işlemi başarısız oldu!!!");
      });
  };

  // durumu değiştir
  const handleStatus = () => {
    // reducer'a haber gönder
    // dispatch({
    //   type: ActionTypes.TOGGLE,
    //   payload: todo,
    // });

    api.patch(`/todos/${todo.id}`, { is_done: !todo.is_done }).then(() => {
      dispatch(toggleStatus(todo));
    });
  };
  return (
    <div className="border rounded p-4 my-5 shadow-lg">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>

      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
