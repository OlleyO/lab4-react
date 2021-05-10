import Chessboard from "chessboardjsx";
import wp from "../img/white-pawn.png";
import bp from "../img/black-pawn.png";
import wr from "../img/white-rook.png";
import br from "../img/black-rook.png";
import wb from "../img/white-bishop.png";
import wq from "../img/white-queen.png";
import bq from "../img/black-queen.png";
import wk from "../img/white-king.png";
import bk from "../img/black-king.png";

const ChessBoard = () => {
  const position = {
    f1: "wR",
    g1: "wK",
    a2: "wP",
    g2: "wP",
    h2: "wP",
    b3: "wP",
    d3: "wP",
    h3: "wR",
    a5: "bP",
    b5: "bP",
    c5: "bP",
    e5: "wB",
    f6: "wP",
    g6: "wQ",
    f7: "bP",
    a8: "bR",
    c8: "bB",
    e8: "bR",
    f8: "bQ",
    g8: "bK",
  };

  return (
    <Chessboard
      position={position}
      pieces={{
        wP: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={wp}
          />
        ),
        bP: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={bp}
          />
        ),
        wR: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={wr}
          />
        ),
        bR: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={br}
          />
        ),
        wB: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={wb}
          />
        ),
        bB: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={bp}
          />
        ),
        wQ: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={wq}
          />
        ),
        bQ: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={bq}
          />
        ),

        wQ: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={wq}
          />
        ),
        bQ: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={bq}
          />
        ),

        wK: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={wk}
          />
        ),
        bK: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? squareWidth * 1.5 : squareWidth,
              height: isDragging ? squareWidth * 1.5 : squareWidth,
            }}
            src={bk}
          />
        ),
      }}
      lightSquareStyle={{ backgroundColor: "azure" }}
      darkSquareStyle={{ backgroundColor: "gray" }}
    ></Chessboard>
  );
};

export default ChessBoard;
