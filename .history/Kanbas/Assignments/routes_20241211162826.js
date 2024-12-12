import * as assignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentDao.deleteAssignment(assignmentId);
    res.send(status);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const statues = assignmentDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(updatedAssignment);
  });
}
