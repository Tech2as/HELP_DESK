<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
           Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->text('descricao');

            // prioridade pode ser baixa, media, alta, urgente
            $table->enum('prioridade', ['baixa', 'media', 'alta', 'urgente'])->default('baixa');

            // status do chamado
            $table->enum('status', ['aberto', 'em_andamento', 'resolvido', 'fechado'])->default('aberto');

            // quem abriu o ticket (usuário)
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            // analista responsável
            $table->foreignId('analista_id')->nullable()->constrained('users')->onDelete('set null');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
