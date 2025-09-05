const tableName = 'grade_c';

export const gradesService = {
  async getAll() {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "score_c" } },
          { field: { Name: "submitted_date_c" } },
          { field: { Name: "comments_c" } },
          { field: { Name: "student_id_c" } },
          { field: { Name: "assignment_id_c" } }
        ],
        orderBy: [
          { fieldName: "submitted_date_c", sorttype: "DESC" }
        ],
        pagingInfo: { limit: 200, offset: 0 }
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.fetchRecords(tableName, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching grades:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async getByStudentId(studentId) {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "score_c" } },
          { field: { Name: "submitted_date_c" } },
          { field: { Name: "comments_c" } },
          { field: { Name: "student_id_c" } },
          { field: { Name: "assignment_id_c" } }
        ],
        where: [
          { FieldName: "student_id_c", Operator: "EqualTo", Values: [parseInt(studentId)] }
        ],
        orderBy: [
          { fieldName: "submitted_date_c", sorttype: "DESC" }
        ]
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.fetchRecords(tableName, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching student grades:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async getByStudentIdWithFilter(studentId, filters = {}) {
    try {
      let whereConditions = [
        { FieldName: "student_id_c", Operator: "EqualTo", Values: [parseInt(studentId)] }
      ];

      if (filters.startDate) {
        whereConditions.push({
          FieldName: "submitted_date_c",
          Operator: "GreaterThanOrEqualTo",
          Values: [filters.startDate]
        });
      }

      if (filters.endDate) {
        whereConditions.push({
          FieldName: "submitted_date_c",
          Operator: "LessThanOrEqualTo", 
          Values: [filters.endDate]
        });
      }

      if (filters.assignmentId) {
        whereConditions.push({
          FieldName: "assignment_id_c",
          Operator: "EqualTo",
          Values: [parseInt(filters.assignmentId)]
        });
      }

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "score_c" } },
          { field: { Name: "submitted_date_c" } },
          { field: { Name: "comments_c" } },
          { field: { Name: "student_id_c" } },
          { field: { Name: "assignment_id_c" } }
        ],
        where: whereConditions,
        orderBy: [
          { fieldName: "submitted_date_c", sorttype: "DESC" }
        ]
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.fetchRecords(tableName, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching filtered student grades:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async getByAssignmentId(assignmentId) {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "score_c" } },
          { field: { Name: "submitted_date_c" } },
          { field: { Name: "comments_c" } },
          { field: { Name: "student_id_c" } },
          { field: { Name: "assignment_id_c" } }
        ],
        where: [
          { FieldName: "assignment_id_c", Operator: "EqualTo", Values: [parseInt(assignmentId)] }
        ],
        orderBy: [
          { fieldName: "submitted_date_c", sorttype: "DESC" }
        ]
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.fetchRecords(tableName, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching assignment grades:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async getById(id) {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "score_c" } },
          { field: { Name: "submitted_date_c" } },
          { field: { Name: "comments_c" } },
          { field: { Name: "student_id_c" } },
          { field: { Name: "assignment_id_c" } }
        ]
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.getRecordById(tableName, id, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching grade with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async create(gradeData) {
    try {
      const params = {
        records: [{
          Name: gradeData.Name || `Grade-${Date.now()}`,
          score_c: parseFloat(gradeData.score_c || gradeData.score),
          submitted_date_c: gradeData.submitted_date_c || gradeData.submittedDate || new Date().toISOString().split("T")[0],
          comments_c: gradeData.comments_c || gradeData.comments || "",
          student_id_c: parseInt(gradeData.student_id_c || gradeData.studentId),
          assignment_id_c: parseInt(gradeData.assignment_id_c || gradeData.assignmentId)
        }]
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.createRecord(tableName, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);

        if (failedRecords.length > 0) {
          console.error(`Failed to create grades ${failedRecords.length} records:${JSON.stringify(failedRecords)}`);
        }

        return successfulRecords.length > 0 ? successfulRecords[0].data : null;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error creating grade:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async update(id, gradeData) {
    try {
      const params = {
        records: [{
          Id: parseInt(id),
          Name: gradeData.Name || `Grade-${Date.now()}`,
          score_c: parseFloat(gradeData.score_c || gradeData.score),
          submitted_date_c: gradeData.submitted_date_c || gradeData.submittedDate || new Date().toISOString().split("T")[0],
          comments_c: gradeData.comments_c || gradeData.comments || "",
          student_id_c: parseInt(gradeData.student_id_c || gradeData.studentId),
          assignment_id_c: parseInt(gradeData.assignment_id_c || gradeData.assignmentId)
        }]
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.updateRecord(tableName, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulUpdates = response.results.filter(result => result.success);
        const failedUpdates = response.results.filter(result => !result.success);

        if (failedUpdates.length > 0) {
          console.error(`Failed to update grades ${failedUpdates.length} records:${JSON.stringify(failedUpdates)}`);
        }

        return successfulUpdates.length > 0 ? successfulUpdates[0].data : null;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error updating grade:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async delete(id) {
    try {
      const params = {
        RecordIds: [parseInt(id)]
      };

      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const response = await apperClient.deleteRecord(tableName, params);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulDeletions = response.results.filter(result => result.success);
        const failedDeletions = response.results.filter(result => !result.success);

        if (failedDeletions.length > 0) {
          console.error(`Failed to delete grades ${failedDeletions.length} records:${JSON.stringify(failedDeletions)}`);
        }

        return successfulDeletions.length > 0;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error deleting grade:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  },

  async upsertGrade(studentId, assignmentId, score, comments = "") {
    try {
      // First check if grade exists for this student and assignment
      const existingGrades = await this.getByStudentId(studentId);
      const existingGrade = existingGrades.find(grade => 
        (grade.assignment_id_c?.Id || grade.assignment_id_c) === parseInt(assignmentId)
      );

      if (existingGrade) {
        // Update existing grade
        return await this.update(existingGrade.Id, {
          score_c: parseFloat(score),
          comments_c: comments,
          submitted_date_c: new Date().toISOString().split("T")[0]
        });
      } else {
        // Create new grade
        return await this.create({
          student_id_c: parseInt(studentId),
          assignment_id_c: parseInt(assignmentId),
          score_c: parseFloat(score),
          comments_c: comments
        });
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error upserting grade:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      throw error;
    }
  }
};