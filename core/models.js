const TeacherEntity = require('./entities/teacher-entity')
const StudyEntity = require('./entities/study-entity')

StudyEntity.hasMany(TeacherEntity, {onDelete: 'CASCADE', foreignKey: {allowNull: false}});
TeacherEntity.belongsTo(StudyEntity);