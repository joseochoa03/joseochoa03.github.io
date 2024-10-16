<?php
// Configuración de la base de datos
$host = 'https://github.com/joseochoa03/joseochoa03.github.io/blob/main/guardar.php';
$dbname = 'usuarios';
$username = 'usuario';
$password = 'contraseña';

try {
    // Crear conexión
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Obtener datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];

    // Preparar y ejecutar la consulta
    $stmt = $conn->prepare("INSERT INTO usuarios (nombre, apellido, correo) VALUES (:nombre, :apellido, :correo)");
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':apellido', $apellido);
    $stmt->bindParam(':correo', $correo);
    $stmt->execute();

    echo "Registro guardado exitosamente";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Cerrar la conexión
$conn = null;
?>
