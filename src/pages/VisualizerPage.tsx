import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { VisualizerWorkspace } from '../features/visualizer/VisualizerWorkspace';
import { getLesson } from '../lessons/registry';
import { LessonProvider } from '../lessons/LessonContext';

export const VisualizerPage: React.FC = () => {
  const { languageId, topicId, programId } = useParams();

  if (!languageId || !topicId || !programId) return <Navigate to="/" />;

  const lesson = getLesson(languageId, topicId, programId);

  if (!lesson) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#050510] text-slate-400 flex-col gap-4">
        <div className="text-5xl">🚧</div>
        <p className="text-lg font-medium">Coming Soon!</p>
        <p className="text-sm text-slate-600">This lesson is being prepared.</p>
      </div>
    );
  }

  return (
    <LessonProvider lesson={lesson}>
      <VisualizerWorkspace />
    </LessonProvider>
  );
};
