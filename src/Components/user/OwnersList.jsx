const OwnersList = () => {
  const owners = [
    {
      id: 1,
      tipodedocumento: "CC",
      identificacion: "1117800000",
      nombre: "Andrés López Ortega",
      email: "andres@gmail.com",
      direccion: "Barrio San Luis",
      telefono: "3209000000",
    },

    {
      id: 1,
      tipodedocumento: "CC",
      identificacion: "1117800000",
      nombre: "Andrés López Ortega",
      email: "andres@gmail.com",
      direccion: "Barrio San Luis",
      telefono: "3209000000",
    },

    {
      id: 1,
      tipodedocumento: "CC",
      identificacion: "1117800000",
      nombre: "Andrés López Ortega",
      email: "andres@gmail.com",
      direccion: "Barrio San Luis",
      telefono: "3209000000",
    },

    {
      id: 1,
      tipodedocumento: "CC",
      identificacion: "1117800000",
      nombre: "Andrés López Ortega",
      email: "andres@gmail.com",
      direccion: "Barrio San Luis",
      telefono: "3209000000",
    },

    {
      id: 1,
      tipodedocumento: "CC",
      identificacion: "1117800000",
      nombre: "Andrés López Ortega",
      email: "andres@gmail.com",
      direccion: "Barrio San Luis",
      telefono: "3209000000",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col">
          <table class="table">
            <thead>
              <tr>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {owners.length > 0 &&
                owners.map((owner) => (
                  <tr key={owner.id}>
                    <td>{owner.tipodedocumento}</td>
                    <td>{owner.identificacion}</td>
                    <td>{owner.nombre}</td>
                    <td>{owner.email}</td>
                    <td>{owner.direccion}</td>
                    <td>{owner.telefono}</td>
                    <td className="actions">
                      <button className="btn btn-edit">
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button className="btn btn-delete">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OwnersList;
