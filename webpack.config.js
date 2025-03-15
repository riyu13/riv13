// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./src/main.jsx", // Masukkan file utama aplikasi React Anda di sini.
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"), // Direktori output hasil bundling.
    filename: "bundle.js", // Nama file bundel hasil bundling.
  },
  mode: "development",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader", // Gunakan Babel untuk mengonversi ES6+ ke ES5.
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Menggunakan loader CSS.
      },
      // Tambahkan aturan lain sesuai kebutuhan, misalnya untuk file gambar.
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Ekstensi file yang diizinkan dalam import.
  },
  devServer: {
    contentBase: "./dist", // Direktori sumber daya statis yang akan disajikan.
    port: 3000, // Port yang akan digunakan oleh server pengembangan.
  },
};
